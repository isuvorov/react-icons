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

var IoIosCloseOutline = function (_React$Component) {
    _inherits(IoIosCloseOutline, _React$Component);

    function IoIosCloseOutline() {
        _classCallCheck(this, IoIosCloseOutline);

        return _possibleConstructorReturn(this, (IoIosCloseOutline.__proto__ || Object.getPrototypeOf(IoIosCloseOutline)).apply(this, arguments));
    }

    _createClass(IoIosCloseOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.2 8.5c6.4 6.3 6.4 16.7 0 23s-16.6 6.3-22.9 0-6.4-16.7 0-23 16.6-6.3 22.9 0z m-0.9 22c5.8-5.7 5.8-15.3 0-21s-15.3-5.8-21.1 0-5.8 15.3 0 21 15.3 5.8 21.1 0z m-4-18l1 0.9-6.6 6.6 6.6 6.6-1 0.9-6.5-6.6-6.6 6.6-1-0.9 6.6-6.6-6.5-6.6 0.9-0.9 6.6 6.6z' })
                )
            );
        }
    }]);

    return IoIosCloseOutline;
}(React.Component);

exports.default = IoIosCloseOutline;
module.exports = exports['default'];