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

var IoIosHeart = function (_React$Component) {
    _inherits(IoIosHeart, _React$Component);

    function IoIosHeart() {
        _classCallCheck(this, IoIosHeart);

        return _possibleConstructorReturn(this, (IoIosHeart.__proto__ || Object.getPrototypeOf(IoIosHeart)).apply(this, arguments));
    }

    _createClass(IoIosHeart, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.5 6.3c5.4 0 9.5 3.3 9.5 9 0 2.4-1 5.6-3.2 8.2s-3.5 4.1-7.8 6.9-6.5 3.4-6.5 3.4-2.2-0.6-6.5-3.4-5.6-4.2-7.8-6.9-3.2-5.8-3.2-8.2c0-5.7 4.1-9 9.5-9 3 0 6.4 1.4 8 4.1 1.6-2.7 5-4.1 8-4.1z' })
                )
            );
        }
    }]);

    return IoIosHeart;
}(React.Component);

exports.default = IoIosHeart;
module.exports = exports['default'];