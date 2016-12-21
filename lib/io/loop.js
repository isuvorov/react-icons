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

var IoLoop = function (_React$Component) {
    _inherits(IoLoop, _React$Component);

    function IoLoop() {
        _classCallCheck(this, IoLoop);

        return _possibleConstructorReturn(this, (IoLoop.__proto__ || Object.getPrototypeOf(IoLoop)).apply(this, arguments));
    }

    _createClass(IoLoop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.4 23.4v4.6c3.8-0.7 6.7-3.9 6.7-8 0-1.2-0.3-2.3-0.8-3.4-0.2-0.5-0.4-1-0.7-1.4l3.7-3.3c0.1 0.1 0.1 0.2 0.2 0.3 1.7 2.2 2.6 4.8 2.6 7.8v0.3c-0.2 5.6-3.7 10.2-8.7 12-0.9 0.4-2 0.7-3 0.7v4.5l-8-7 3.4-3.1z m-14.4-3.7c0.2-5.6 3.8-10.4 8.8-12.1 1-0.3 1.9-0.6 2.9-0.6v-4.5l8 7-3.4 3.1-4.7 4 0.1-4.6c-3.8 0.7-6.7 4-6.7 8 0 1.3 0.3 2.4 0.8 3.5 0.2 0.5 0.4 0.9 0.7 1.3l-3.7 3.4c-0.1-0.2-0.1-0.2-0.2-0.4-1.6-2.2-2.6-4.9-2.6-7.8v-0.3z' })
                )
            );
        }
    }]);

    return IoLoop;
}(React.Component);

exports.default = IoLoop;
module.exports = exports['default'];