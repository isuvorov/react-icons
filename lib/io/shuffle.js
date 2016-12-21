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

var IoShuffle = function (_React$Component) {
    _inherits(IoShuffle, _React$Component);

    function IoShuffle() {
        _classCallCheck(this, IoShuffle);

        return _possibleConstructorReturn(this, (IoShuffle.__proto__ || Object.getPrototypeOf(IoShuffle)).apply(this, arguments));
    }

    _createClass(IoShuffle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.4 14.1c-4.1 0-6.5 3.4-9.4 7.2-3.2 4.3-6.8 9.4-13.3 9.4h-3.7v-4.9h3.7c4 0 6.5-3.7 9.4-7.5 3.2-4.3 6.8-9.1 13.3-9.1h2.3v-4.2l6.3 6.3-6.3 6.6v-3.8h-2.3z m-16.9 2.9c-1.7-1.6-3.3-2.7-5.8-2.8-2.7-0.1-3.7 0-3.7 0v-4.9h3.7c3.7 0 6.5 1.6 8.8 3.7-0.8 1-1.5 1.9-2.2 2.9-0.3 0.3-0.5 0.7-0.8 1.1z m19.2 8.8v-3.7l6.3 6.6-6.3 6.3v-4.2h-2.3c-3.9 0-6.8-1.8-9.1-4.2 0.9-1.1 1.7-2.1 2.5-3.2 0.1-0.2 0.4-0.4 0.5-0.7 1.7 1.9 3.6 3.1 6.1 3.1h2.3z' })
                )
            );
        }
    }]);

    return IoShuffle;
}(React.Component);

exports.default = IoShuffle;
module.exports = exports['default'];