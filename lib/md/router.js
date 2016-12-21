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

var MdRouter = function (_React$Component) {
    _inherits(MdRouter, _React$Component);

    function MdRouter() {
        _classCallCheck(this, MdRouter);

        return _possibleConstructorReturn(this, (MdRouter.__proto__ || Object.getPrototypeOf(MdRouter)).apply(this, arguments));
    }

    _createClass(MdRouter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 30v-3.4h-3.4v3.4h3.4z m-5.9 0v-3.4h-3.2v3.4h3.2z m-5.7 0v-3.4h-3.4v3.4h3.4z m18.2-8.4c1.8 0 3.4 1.6 3.4 3.4v6.6c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-6.6c0-1.8 1.6-3.4 3.4-3.4h16.6v-6.6h3.4v6.6h3.2z m0.6-10.4l-1.3 1.3c-1.2-1.2-2.8-1.6-4.3-1.6s-2.9 0.4-4.1 1.6l-1.3-1.3c1.5-1.5 3.4-2.4 5.4-2.4s4.1 0.9 5.6 2.4z m1.5-1.4c-2.1-1.8-4.6-2.8-7.1-2.8s-4.9 1-6.9 2.8l-1.3-1.3c2.3-2.3 5.3-3.5 8.2-3.5s6.1 1.2 8.4 3.5z' })
                )
            );
        }
    }]);

    return MdRouter;
}(React.Component);

exports.default = MdRouter;
module.exports = exports['default'];