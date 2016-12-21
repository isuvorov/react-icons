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

var IoIosFootball = function (_React$Component) {
    _inherits(IoIosFootball, _React$Component);

    function IoIosFootball() {
        _classCallCheck(this, IoIosFootball);

        return _possibleConstructorReturn(this, (IoIosFootball.__proto__ || Object.getPrototypeOf(IoIosFootball)).apply(this, arguments));
    }

    _createClass(IoIosFootball, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 3.8c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2z m3.2 30.7c0.2 0 0.3 0 0.6-0.1l1.9-5-1.6-3.1v0h-8.3l-1.6 3 2 5.1c0.2 0.1 0.4 0.1 0.5 0.1 1 0.3 2 0.4 3 0.4 1.1 0 2.4-0.1 3.5-0.4z m-8.4-28.5c-2.8 1.1-5.3 3-7 5.4l1.7 5 0.4 0.2 3.8 1.8 5.5-4.7v-4.6z m17.3 5.4c-1.7-2.4-4.2-4.4-7-5.4l-4.5 3.1v4.6l5.5 4.7 4.2-1.9z m-27 9.9c0.2 2.7 1.2 5.2 2.6 7.2l5.5 0.1 1.6-3.1-1.6-6 0 0-3.9-1.8z m21.6 7.3l5.5-0.1c1.4-2 2.4-4.5 2.6-7.2l-4.2-3.6-3.9 1.8-1.6 6z' })
                )
            );
        }
    }]);

    return IoIosFootball;
}(React.Component);

exports.default = IoIosFootball;
module.exports = exports['default'];