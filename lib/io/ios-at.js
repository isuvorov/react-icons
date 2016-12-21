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

var IoIosAt = function (_React$Component) {
    _inherits(IoIosAt, _React$Component);

    function IoIosAt() {
        _classCallCheck(this, IoIosAt);

        return _possibleConstructorReturn(this, (IoIosAt.__proto__ || Object.getPrototypeOf(IoIosAt)).apply(this, arguments));
    }

    _createClass(IoIosAt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.8 25h2.2c-0.1 0.1-0.2 0.3-0.2 0.5-0.3 0.4-1.1 1.5-1.8 2.1s-1.4 1.1-2.2 1.5-1.6 0.8-2.5 1.1c-0.9 0.2-1.8 0.3-2.7 0.3-1.2 0-2.6-0.2-3.8-0.6s-2.3-1-3.4-1.9c-0.9-0.7-2-2.1-2.6-3.5-0.6-1.3-0.8-2.6-0.8-4.6 0-1.5 0.3-3 0.9-4.3s1.3-2.3 2.2-3.3 2.2-1.6 3.5-2.1c1.1-0.5 2.5-0.7 4-0.7 1.3 0 2.5 0.2 3.6 0.6s2.2 0.9 3.1 1.7 1.4 1.7 1.9 2.8c0.5 1.1 0.6 2 0.6 3.5 0 1-0.1 2.1-0.5 3.1-0.3 0.8-0.7 1.5-1.3 2.3-0.6 0.7-1.1 1.3-1.9 1.7-0.9 0.5-1.6 0.7-2.3 0.7s-1.3-0.1-1.8-0.6c-0.1-0.1-0.2-0.2-0.3-0.4-0.3 0.3-0.7 0.5-1.1 0.6-0.8 0.3-1.4 0.4-2.1 0.4-0.6 0-1.2-0.1-1.8-0.4s-0.9-0.5-1.3-0.9-0.7-0.9-0.9-1.5-0.4-1.1-0.4-1.7c0-0.9 0.2-1.9 0.5-2.9l0.1-0.1c0.3-0.7 0.4-1.3 1-2.1 0.6-0.8 1.3-1.5 2.2-2.1 0.9-0.5 1.9-0.8 3-0.8 0.9 0 1.7 0.3 2.5 0.7 0.4 0.3 0.7 0.5 1 0.8l0.4-0.9h1.9l-3 8.1c-0.2 0.4-0.3 0.7-0.3 1-0.1 0.3-0.1 0.6-0.1 0.7s0 0.3 0.1 0.3c0 0 0 0 0.4 0 0.3 0 0.8-0.1 1.4-0.5 0.6-0.3 0.8-0.6 1.3-1.3s0.7-1 1-1.8 0.5-1.5 0.5-2.5c0-1-0.1-1.8-0.5-2.6-0.4-0.9-0.8-1.6-1.4-2.2-0.7-0.6-1.5-1.1-2.4-1.4s-2.1-0.5-3.1-0.5c-1.5 0-2.5 0.2-3.5 0.6-1.1 0.4-1.9 1-2.7 1.8s-1.4 1.7-1.9 2.7c-0.5 1.1-0.7 2.4-0.7 3.5 0 1.7 0.2 2.7 0.6 3.6 0.5 1.1 1.3 2.4 2.1 3.1s1.7 1.2 2.7 1.6c1.1 0.4 2.2 0.6 3.4 0.6 0.7 0 1.5-0.2 2.2-0.4s1.4-0.4 2-0.8 2.2-1.6 3-2.6z m-6.5-2.3c0.3-0.4 0.5-0.9 0.7-1.4l1.6-4.3c-0.1-0.4-0.2-0.6-0.4-0.7-0.2-0.3-0.5-0.5-0.7-0.7h-0.2v-0.1c-0.2-0.1-0.3-0.1-0.6-0.2-0.3-0.1-0.6-0.1-0.9-0.1-0.7 0-1.3 0.2-2 0.6-0.8 0.5-1.3 1.1-1.6 1.6-0.4 0.6-0.5 0.9-0.7 1.5 0 0.1-0.1 0.2-0.1 0.2-0.2 0.8-0.5 1.5-0.5 2.2 0 0.4 0.1 0.8 0.3 1.1s0.3 0.6 0.5 0.9 0.6 0.5 0.9 0.6 0.6 0.2 1 0.2c0.3 0 0.6 0 0.9-0.1 0.3-0.1 0.6-0.2 0.9-0.4 0.2-0.2 0.5-0.4 0.9-0.9z' })
                )
            );
        }
    }]);

    return IoIosAt;
}(React.Component);

exports.default = IoIosAt;
module.exports = exports['default'];