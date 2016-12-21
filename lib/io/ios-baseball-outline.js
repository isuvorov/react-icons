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

var IoIosBaseballOutline = function (_React$Component) {
    _inherits(IoIosBaseballOutline, _React$Component);

    function IoIosBaseballOutline() {
        _classCallCheck(this, IoIosBaseballOutline);

        return _possibleConstructorReturn(this, (IoIosBaseballOutline.__proto__ || Object.getPrototypeOf(IoIosBaseballOutline)).apply(this, arguments));
    }

    _createClass(IoIosBaseballOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.9 21.8v0.1c-0.8 7.6-7 13.6-14.6 14.3h-0.1c-0.2 0-0.3 0.1-0.4 0.1h-1c-9 0-16.3-7.3-16.3-16.3v-1c0-0.2 0.1-0.2 0.1-0.4v-0.2c0.7-7.5 6.7-13.7 14.3-14.6 0.6 0 1.2 0 1.9 0 8.9 0 16.2 7.2 16.2 16.2 0 0.5 0 1.1-0.1 1.6v0.2z m-1.2-1.8c0-8.2-6.7-14.9-15-14.9-0.2 0-0.3 0.1-0.6 0.1 0 0.8 0.2 1.6 0.3 2.4l1.6-0.5 0.4 1.2-1.6 0.5c0.1 0.6 0.3 1.1 0.5 1.7 0.2 0.4 0.4 0.8 0.6 1.2l1.4-0.9 0.7 1-1.5 1c0.5 1 1.2 1.8 2 2.6l1.1-1.2 0.9 1-1.1 1.1c0.8 0.8 1.7 1.4 2.6 2l1-1.4 1.1 0.7-1 1.3c0.4 0.2 0.8 0.4 1.2 0.6 0.5 0.2 1.1 0.3 1.7 0.5l0.6-1.6 1.1 0.4-0.4 1.5c0.7 0.2 1.5 0.3 2.3 0.3 0-0.2 0.1-0.4 0.1-0.6z m-29.9 0c0 8.2 6.7 14.9 15 14.9h0.3c-0.1-0.7-0.1-1.3-0.3-2l-1.7 0.5-0.4-1.2 1.8-0.6c-0.1-0.6-0.4-1.2-0.6-1.8-0.2-0.4-0.3-0.7-0.5-1.1l-1.5 1-0.7-1 1.6-1.1c-0.6-1-1.3-1.9-2-2.8l-1.4 1.4-0.8-0.9 1.3-1.3c-0.8-0.8-1.7-1.4-2.6-2l-1.1 1.7-1.1-0.7 1.1-1.6c-0.4-0.1-0.8-0.4-1.2-0.5-0.6-0.3-1.2-0.5-1.8-0.7l-0.6 1.9-1.2-0.4 0.5-1.8c-0.7-0.1-1.4-0.1-2.1-0.2v0.3z m16.5 14.8c6.9-0.7 12.4-6 13.2-12.9-0.8-0.1-1.8-0.3-2.6-0.4l-0.7 2.1-1.2-0.4 0.6-2c-1.1-0.3-2.2-0.7-3.2-1.3l-1.2 1.8-1-0.7 1.1-1.6c-1-0.7-2-1.4-2.9-2.2l-1.5 1.5-0.8-0.9 1.5-1.5c-0.8-0.8-1.5-1.8-2.1-2.8l-1.7 1.1-0.7-1 1.7-1.2c-0.5-1-0.9-2.1-1.2-3.2l-2 0.6-0.4-1.2 2.1-0.6c-0.2-1-0.3-1.8-0.4-2.8-6.9 0.9-12.3 6.4-13 13.2 0.8 0.1 1.6 0.2 2.4 0.3l0.7-1.7 1.1 0.3-0.5 1.8c1.1 0.3 2.2 0.7 3.3 1.2l1-1.5 1.1 0.7-1 1.4c1 0.7 1.9 1.4 2.8 2.2l1.3-1.3 0.9 0.9-1.4 1.3c0.9 0.9 1.6 1.9 2.2 2.9l1.5-1 0.7 1.1-1.6 1c0.6 1.1 1 2.2 1.3 3.2l1.8-0.5 0.4 1.2-1.9 0.6c0.2 0.8 0.2 1.6 0.3 2.3z' })
                )
            );
        }
    }]);

    return IoIosBaseballOutline;
}(React.Component);

exports.default = IoIosBaseballOutline;
module.exports = exports['default'];