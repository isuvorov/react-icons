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

var TiWatch = function (_React$Component) {
    _inherits(TiWatch, _React$Component);

    function TiWatch() {
        _classCallCheck(this, TiWatch);

        return _possibleConstructorReturn(this, (TiWatch.__proto__ || Object.getPrototypeOf(TiWatch)).apply(this, arguments));
    }

    _createClass(TiWatch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 21.7h3.3c1 0 1.7-0.8 1.7-1.7s-0.7-1.7-1.7-1.7h-1.6v-1.6c0-1-0.8-1.7-1.7-1.7s-1.7 0.7-1.7 1.7v3.3c0 0.9 0.8 1.7 1.7 1.7z m8.3-9.9v-3.5c0-2.7-2.2-5-5-5h-6.6c-2.8 0-5 2.3-5 5v3.5c-2.1 2.1-3.4 5-3.4 8.2s1.3 6.1 3.4 8.2v3.5c0 2.7 2.2 5 5 5h6.6c2.8 0 5-2.3 5-5v-3.5c2.1-2.1 3.4-5 3.4-8.2s-1.3-6.1-3.4-8.2z m-13.3-3.5c0-0.9 0.7-1.6 1.7-1.6h6.6c1 0 1.7 0.7 1.7 1.6v3c-1.5-0.8-3.2-1.3-5-1.3s-3.5 0.5-5 1.3v-3z m10 23.4c0 0.9-0.7 1.6-1.7 1.6h-6.6c-1 0-1.7-0.7-1.7-1.6v-3.1c1.5 0.9 3.2 1.4 5 1.4s3.5-0.5 5-1.4v3.1z m-5-3.4c-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3 8.3 3.7 8.3 8.3-3.7 8.3-8.3 8.3z' })
                )
            );
        }
    }]);

    return TiWatch;
}(React.Component);

exports.default = TiWatch;
module.exports = exports['default'];