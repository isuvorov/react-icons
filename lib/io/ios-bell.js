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

var IoIosBell = function (_React$Component) {
    _inherits(IoIosBell, _React$Component);

    function IoIosBell() {
        _classCallCheck(this, IoIosBell);

        return _possibleConstructorReturn(this, (IoIosBell.__proto__ || Object.getPrototypeOf(IoIosBell)).apply(this, arguments));
    }

    _createClass(IoIosBell, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.8 17.7c0 8.9 2.2 9.8 5.2 12.3h-30c3-2.5 5.2-3.4 5.2-12.3 0-7.7 4.1-10.2 7.9-10.8v-0.2c0-0.9 0.9-1.7 1.9-1.7s1.9 0.8 1.9 1.7v0.2c3.8 0.5 7.9 3.1 7.9 10.8z m-9.8 17.3c-2.1 0-3.8-1.6-4.1-3.4h8.2c-0.3 1.8-2 3.4-4.1 3.4z' })
                )
            );
        }
    }]);

    return IoIosBell;
}(React.Component);

exports.default = IoIosBell;
module.exports = exports['default'];