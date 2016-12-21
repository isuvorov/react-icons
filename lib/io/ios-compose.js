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

var IoIosCompose = function (_React$Component) {
    _inherits(IoIosCompose, _React$Component);

    function IoIosCompose() {
        _classCallCheck(this, IoIosCompose);

        return _possibleConstructorReturn(this, (IoIosCompose.__proto__ || Object.getPrototypeOf(IoIosCompose)).apply(this, arguments));
    }

    _createClass(IoIosCompose, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 25l10-10v18.8h-25v-23.8h20l-10 10v5h5z m10.3-17.8l2.5 2.5-14 14.1h-2.5v-2.5z m4.4-0.9c0.1 0.2 0.3 0.4 0.3 0.7s-0.2 0.6-0.3 0.8l-0.9 1-2.5-2.5 0.9-1c0.2-0.1 0.5-0.3 0.8-0.3s0.5 0.2 0.8 0.3z' })
                )
            );
        }
    }]);

    return IoIosCompose;
}(React.Component);

exports.default = IoIosCompose;
module.exports = exports['default'];