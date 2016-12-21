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

var IoScissors = function (_React$Component) {
    _inherits(IoScissors, _React$Component);

    function IoScissors() {
        _classCallCheck(this, IoScissors);

        return _possibleConstructorReturn(this, (IoScissors.__proto__ || Object.getPrototypeOf(IoScissors)).apply(this, arguments));
    }

    _createClass(IoScissors, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 9.1c-1 2.5-9.1 13.4-9.1 13.4l-2.5 2.5s-2.4 1-3.9 3.4-2.6 5.5-2.6 5.5c-0.5 2-2.2 3.6-4.1 3.6-2.4 0-4.4-2.3-4.4-5s2-5 4.4-5c1 0 1.9 0.4 2.6 1 0.2 0.1 0.3 0.3 0.3 0.3l0.2 0.2c0.3 0.3 0.5 0.1 1.1-0.9 0.6-1.1 1.3-2.7 2.1-4.2s3-4.6 3-4.6l1.3-1.8 11.3-15c1.7 1.6 1.4 4 0.3 6.6z m-22.2 25.9c1.1 0 2.2-1.1 2.2-2.5s-1.1-2.5-2.2-2.5-2.2 1.1-2.2 2.5 1 2.5 2.2 2.5z m10.6-12.5c0.7 0 1.3-0.5 1.3-1.2s-0.6-1.3-1.3-1.3-1.2 0.5-1.2 1.3 0.5 1.2 1.2 1.2z m-3.8-1.8c-2.4-3.2-7.1-9.8-7.8-11.6-1.1-2.6-1.4-5 0.4-6.6l10.4 13.9-0.2 0.3-1.3 1.8v0.1c-0.1 0.1-0.8 1-1.5 2.1z m14.4 6.8c2.4 0 4.4 2.3 4.4 5s-2 5-4.4 5c-1.9 0-3.6-1.6-4.2-3.6s-1-3.2-2.5-5.5c-0.9-1.4-2-2.2-2.8-2.8l2.3-2.3h0.1c0.1-0.1 0.1-0.2 0.2-0.3 0.2 0.3 0.4 0.7 0.5 0.9 0.8 1.5 1.6 3.1 2.2 4.2 0.6 1 0.8 1.2 1.1 0.9 0.1-0.1 0-0.1 0.1-0.2h0.1c0-0.1 0.1-0.2 0.3-0.3 0.7-0.6 1.6-1 2.6-1z m0 7.5c1.2 0 2.2-1.1 2.2-2.5s-1-2.5-2.2-2.5-2.2 1.1-2.2 2.5 1.1 2.5 2.2 2.5z' })
                )
            );
        }
    }]);

    return IoScissors;
}(React.Component);

exports.default = IoScissors;
module.exports = exports['default'];