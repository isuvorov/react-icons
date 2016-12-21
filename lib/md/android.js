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

var MdAndroid = function (_React$Component) {
    _inherits(MdAndroid, _React$Component);

    function MdAndroid() {
        _classCallCheck(this, MdAndroid);

        return _possibleConstructorReturn(this, (MdAndroid.__proto__ || Object.getPrototypeOf(MdAndroid)).apply(this, arguments));
    }

    _createClass(MdAndroid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 8.4v-1.8h-1.6v1.8h1.6z m-8.4 0v-1.8h-1.6v1.8h1.6z m9.3-4.8c2.5 1.8 4.1 4.8 4.1 8h-20c0-3.2 1.6-6.2 4.1-8l-2.2-2.2c-0.3-0.3-0.3-0.9 0-1.2s0.8-0.3 1.1 0l2.5 2.5c1.4-0.7 2.9-1.1 4.5-1.1s3 0.4 4.4 1.1l2.5-2.5c0.3-0.3 0.8-0.3 1.1 0s0.4 0.9 0 1.2z m8.2 9.8c1.4 0 2.5 1.1 2.5 2.5v11.6c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-11.6c0-1.4 1.1-2.5 2.5-2.5z m-28.2 0c1.4 0 2.5 1.1 2.5 2.5v11.6c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-11.6c0-1.4 1.1-2.5 2.5-2.5z m4.1 16.6v-16.6h20v16.6c0 0.9-0.7 1.6-1.6 1.6h-1.8v5.9c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-5.9h-3.2v5.9c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-5.9h-1.8c-0.9 0-1.6-0.7-1.6-1.6z' })
                )
            );
        }
    }]);

    return MdAndroid;
}(React.Component);

exports.default = MdAndroid;
module.exports = exports['default'];