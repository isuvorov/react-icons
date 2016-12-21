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

var IoSocialPinterest = function (_React$Component) {
    _inherits(IoSocialPinterest, _React$Component);

    function IoSocialPinterest() {
        _classCallCheck(this, IoSocialPinterest);

        return _possibleConstructorReturn(this, (IoSocialPinterest.__proto__ || Object.getPrototypeOf(IoSocialPinterest)).apply(this, arguments));
    }

    _createClass(IoSocialPinterest, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5c-1.7 0-3.4-0.2-5-0.7 0.6-1.1 1.4-2.4 1.8-3.8 0.2-0.7 1.2-4.8 1.2-4.8 0.7 1.2 2.4 2.2 4.3 2.2 5.6 0 9.4-5.1 9.4-12 0-5.1-4.4-10-11.1-10-8.3 0-12.5 5.9-12.5 10.9 0 3 1.2 5.7 3.6 6.7 0.4 0.2 0.8 0 1-0.5 0-0.3 0.2-1 0.3-1.4 0.1-0.4 0-0.5-0.3-0.9-0.7-0.9-1.1-1.9-1.1-3.4 0-4.5 3.2-8.4 8.6-8.4 4.6 0 7.3 2.8 7.3 6.6 0 5.1-2.3 9.3-5.5 9.3-1.9 0-3.3-1.4-2.9-3.3 0.6-2.2 1.6-4.6 1.6-6.2 0-1.4-0.8-2.6-2.3-2.6-1.9 0-3.4 1.9-3.4 4.5 0 1.6 0.5 2.8 0.5 2.8s-1.9 8.1-2.2 9.5c-0.3 1.4-0.4 2.8-0.3 4-6.2-2.7-10.5-8.8-10.5-16 0-9.7 7.8-17.5 17.5-17.5z' })
                )
            );
        }
    }]);

    return IoSocialPinterest;
}(React.Component);

exports.default = IoSocialPinterest;
module.exports = exports['default'];