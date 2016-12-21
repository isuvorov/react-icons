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

var IoPullRequest = function (_React$Component) {
    _inherits(IoPullRequest, _React$Component);

    function IoPullRequest() {
        _classCallCheck(this, IoPullRequest);

        return _possibleConstructorReturn(this, (IoPullRequest.__proto__ || Object.getPrototypeOf(IoPullRequest)).apply(this, arguments));
    }

    _createClass(IoPullRequest, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10 5c2.7 0 5 2.3 5 5 0 1.9-1 3.4-2.5 4.3v13.9c1.5 0.9 2.5 2.4 2.5 4.3 0 2.7-2.3 5-5 5s-5-2.3-5-5c0-1.9 1-3.4 2.5-4.3v-13.9c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5z m0 30c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m0-22.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m22.4 15.6c1.6 0.9 2.6 2.5 2.6 4.4 0 2.7-2.3 5-5 5s-5-2.3-5-5c0-1.8 0.9-3.4 2.4-4.3v-12.2c0-1.2-0.3-2-0.8-2.6-0.8-0.7-2.1-0.9-4.1-0.9v5l-7.5-7.5 7.5-7.5v5c3.3-0.1 5.8 0.6 7.5 2.3 1.6 1.4 2.4 3.6 2.4 6.2v12.1z m-2.4 6.9c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z' })
                )
            );
        }
    }]);

    return IoPullRequest;
}(React.Component);

exports.default = IoPullRequest;
module.exports = exports['default'];