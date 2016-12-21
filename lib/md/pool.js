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

var MdPool = function (_React$Component) {
    _inherits(MdPool, _React$Component);

    function MdPool() {
        _classCallCheck(this, MdPool);

        return _possibleConstructorReturn(this, (MdPool.__proto__ || Object.getPrototypeOf(MdPool)).apply(this, arguments));
    }

    _createClass(MdPool, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 9.1c0-2.2 1.8-4.1 4.1-4.1s4.1 1.9 4.1 4.1-1.8 4.3-4.1 4.3-4.1-2-4.1-4.3z m-8.9 10.9c-1 0-1.4-0.2-2-0.6-0.3-0.3-0.7-0.4-1.2-0.6l5.3-5.4-1.6-1.8c-1.9-1.8-3.6-2.5-6.6-2.5v-4.1c4.1 0 6.5 0.8 9.1 3.4l10.7 10.6c-0.2 0.1-0.5 0.3-0.7 0.4-0.6 0.4-1 0.6-2 0.6s-1.2-0.2-1.8-0.6c-0.8-0.5-1.8-1-3.7-1s-2.9 0.5-3.7 1c-0.6 0.4-0.9 0.6-1.8 0.6z m22.1 7.5c-1.8 0-2.8-0.6-3.6-1.1-0.6-0.4-1-0.5-1.9-0.5s-1.3 0.1-1.9 0.5c-0.8 0.5-1.8 1.1-3.7 1.1s-2.8-0.6-3.5-1.1c-0.7-0.4-1.1-0.5-2-0.5s-1.2 0.1-1.9 0.5c-0.8 0.5-1.8 1.1-3.6 1.1s-2.9-0.6-3.6-1.1c-0.7-0.4-1.1-0.5-2-0.5s-1.2 0.1-1.9 0.5c-0.8 0.5-1.8 1.1-3.6 1.1v-3.4c0.9 0 1.2-0.1 1.8-0.5 0.8-0.5 1.8-1.1 3.7-1.1s2.8 0.6 3.6 1.1c0.6 0.4 1 0.5 2 0.5s1.2-0.1 1.8-0.5c0.8-0.5 1.8-1.1 3.7-1.1s2.8 0.6 3.6 1.1c0.6 0.4 1 0.5 1.9 0.5s1.3-0.1 1.9-0.5c0.8-0.5 1.8-1.1 3.7-1.1s2.8 0.6 3.6 1.1c0.6 0.4 1 0.5 1.9 0.5v3.4z m0 7.5c-1.8 0-2.8-0.6-3.6-1.1-0.6-0.4-1-0.5-1.9-0.5s-1.3 0.1-1.9 0.5c-0.8 0.5-1.8 1.1-3.7 1.1s-2.8-0.6-3.5-1.1c-0.7-0.4-1.1-0.5-2-0.5s-1.2 0.1-1.9 0.5c-0.8 0.5-1.8 1.1-3.6 1.1s-2.9-0.6-3.7-1.1c-0.6-0.4-1-0.5-1.9-0.5s-1.3 0.1-1.9 0.5c-0.8 0.5-1.8 1.1-3.6 1.1v-3.4c0.9 0 1.2-0.1 1.8-0.5 0.8-0.5 1.8-1.1 3.7-1.1s2.8 0.6 3.6 1.1c0.6 0.4 1 0.5 2 0.5s1.2-0.1 1.8-0.5c0.8-0.5 1.8-1.1 3.7-1.1s2.9 0.6 3.7 1.1c0.6 0.4 0.9 0.5 1.8 0.5s1.4-0.1 2-0.5c0.8-0.5 1.7-1.1 3.6-1.1s2.9 0.6 3.7 1.1c0.6 0.4 0.9 0.5 1.8 0.5v3.4z' })
                )
            );
        }
    }]);

    return MdPool;
}(React.Component);

exports.default = MdPool;
module.exports = exports['default'];