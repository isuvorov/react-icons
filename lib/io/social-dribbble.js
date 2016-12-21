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

var IoSocialDribbble = function (_React$Component) {
    _inherits(IoSocialDribbble, _React$Component);

    function IoSocialDribbble() {
        _classCallCheck(this, IoSocialDribbble);

        return _possibleConstructorReturn(this, (IoSocialDribbble.__proto__ || Object.getPrototypeOf(IoSocialDribbble)).apply(this, arguments));
    }

    _createClass(IoSocialDribbble, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 5c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z m0 27.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5z m3.9-13.2c-0.3-0.9-0.6-1.6-1-2.4 1.9-0.9 3.7-1.9 4.9-3.1 1.2 1.5 2 3.3 2.2 5.3-2 0-4.3 0-6.1 0.2z m2.3-7.1c-1.2 0.9-2.7 1.8-4.4 2.5-0.9-1.7-1.9-3.2-3-4.6 0.4-0.1 0.8-0.1 1.2-0.1 2.3 0 4.5 0.9 6.2 2.2z m-10.1-1.4c1.2 1.4 2.2 3 3.2 4.8-2.7 0.8-5.6 1.3-8.8 1.4 0.8-2.9 2.9-5.1 5.6-6.2z m13.8 10.5c-0.3 2.5-1.6 4.9-3.6 6.4-0.2-1.1-0.4-2.2-0.7-3.3-0.2-1-0.6-2.1-0.9-3 1.6-0.1 3.5-0.2 5.2-0.1z m-9.7-1.3c-3.4 1.4-6.2 3.6-8.2 6.1-1.2-1.7-2-3.8-2-6.1v-0.5c3.8-0.1 7.4-0.7 10.5-1.7 0.3 0.6 0.5 1.3 0.8 1.9-0.5 0.1-0.8 0.1-1.1 0.3z m1.9 1.7c0.5 1.3 0.9 2.5 1.2 3.8 0.3 1.2 0.5 2.5 0.8 3.6-1.3 0.6-2.7 0.9-4.1 0.9-2.4 0-4.6-0.9-6.3-2.3 1.7-2.3 4.1-4.2 7-5.5 0.3-0.2 0.9-0.3 1.4-0.5z' })
                )
            );
        }
    }]);

    return IoSocialDribbble;
}(React.Component);

exports.default = IoSocialDribbble;
module.exports = exports['default'];