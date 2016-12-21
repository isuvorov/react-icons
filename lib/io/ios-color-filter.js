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

var IoIosColorFilter = function (_React$Component) {
    _inherits(IoIosColorFilter, _React$Component);

    function IoIosColorFilter() {
        _classCallCheck(this, IoIosColorFilter);

        return _possibleConstructorReturn(this, (IoIosColorFilter.__proto__ || Object.getPrototypeOf(IoIosColorFilter)).apply(this, arguments));
    }

    _createClass(IoIosColorFilter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.6 16.6c3.7 1 6.4 4.4 6.4 8.4 0 4.8-3.9 8.8-8.7 8.8-2.5 0-4.7-1.1-6.3-2.7-1.6 1.6-3.8 2.7-6.2 2.7-4.9 0-8.8-4-8.8-8.8 0-4 2.7-7.4 6.4-8.4-0.1-0.6-0.2-1.1-0.2-1.6 0-4.8 4-8.7 8.8-8.7s8.8 3.9 8.8 8.7c0 0.5-0.1 1-0.2 1.6z m-8.6 14.3l0.1 0.1c0.2-0.2 0.4-0.5 0.7-0.8 1.1-1.5 1.7-3.2 1.7-5.2 0-0.5-0.1-1-0.2-1.6 2.9-0.7 5-2.9 6-5.6 0.1-0.4 0.2-0.8 0.3-1.2-0.1 0-0.2 0-0.2 0v-0.1c-0.4-0.1-0.7-0.1-1-0.2-0.4 0-0.8 0-1.1 0-2.5 0-4.7 1-6.3 2.6-1.6-1.6-3.8-2.6-6.2-2.6-0.4 0-0.8 0-1.2 0-0.3 0.1-0.6 0.1-1 0.2v0.1c0 0-0.1 0-0.2 0 0.1 0.4 0.2 0.8 0.3 1.2 1 2.7 3.1 4.9 6 5.6-0.1 0.6-0.2 1.1-0.2 1.6 0 2 0.6 3.7 1.7 5.2 0.3 0.3 0.5 0.6 0.7 0.8z m1.2-7.2c0.1 0.4 0.1 0.8 0.1 1.3 0 1.6-0.5 3-1.3 4.1-0.8-1.1-1.2-2.5-1.2-4.1 0-0.5 0-0.9 0-1.3 0.4 0.1 0.8 0.1 1.2 0.1s0.8 0 1.2-0.1z m5.8-6.1c-0.7 2.2-2.6 4-5 4.6-0.3-0.9-0.7-1.7-1.2-2.4 1.4-1.4 3.3-2.3 5.5-2.3 0.2 0 0.5 0.1 0.7 0.1z m-6.2 4.8c-0.3 0-0.6 0.1-0.8 0.1s-0.5-0.1-0.8-0.1c0.3-0.5 0.5-1.1 0.8-1.5 0.3 0.4 0.5 1 0.8 1.5z m-7-4.9c2.1 0 4 0.9 5.4 2.3-0.5 0.7-0.9 1.5-1.2 2.4-2.4-0.6-4.2-2.4-5-4.6 0.2 0 0.5-0.1 0.7-0.1z' })
                )
            );
        }
    }]);

    return IoIosColorFilter;
}(React.Component);

exports.default = IoIosColorFilter;
module.exports = exports['default'];