'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var IoIosPie = function (_React$Component) {
    _inherits(IoIosPie, _React$Component);

    function IoIosPie() {
        _classCallCheck(this, IoIosPie);

        return _possibleConstructorReturn(this, (IoIosPie.__proto__ || Object.getPrototypeOf(IoIosPie)).apply(this, arguments));
    }

    _createClass(IoIosPie, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.8 5c8.9 0 16.2 7.3 16.2 16.3s-7.3 16.2-16.2 16.2c-7.2 0-13.4-4.7-15.5-11.2l15.5-3.8v-17.5z m-1.3-2.5v19.1l-16 4c-1.5-2.5-1.5-6.9-1.5-6.9 0-7.1 4.5-16.2 17-16.2h0.5z' })
                )
            );
        }
    }]);

    return IoIosPie;
}(React.Component);

exports.default = IoIosPie;
module.exports = exports['default'];