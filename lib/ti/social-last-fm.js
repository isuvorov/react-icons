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

var TiSocialLastFm = function (_React$Component) {
    _inherits(TiSocialLastFm, _React$Component);

    function TiSocialLastFm() {
        _classCallCheck(this, TiSocialLastFm);

        return _possibleConstructorReturn(this, (TiSocialLastFm.__proto__ || Object.getPrototypeOf(TiSocialLastFm)).apply(this, arguments));
    }

    _createClass(TiSocialLastFm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 27c3.9 0 5.9-1.3 5.9-4 0-2.2-1.2-3.5-3.8-4.1l-1.8-0.4c-1.1-0.3-1.6-0.9-1.6-1.7 0-1 0.7-1.5 2-1.5 1.4 0 2.2 0.6 2.2 1.7l2.9-0.3c-0.2-2.4-1.8-3.7-4.9-3.7-3.4 0-5.1 1.4-5.1 4.2 0 2 1.1 3.2 3.3 3.7l2 0.4c1.3 0.4 1.9 1 1.9 1.8 0 1.1-1 1.6-3 1.6-2.5 0-4.2-1.2-5-3.7l-1-2.8c-0.5-1.9-1.3-3.3-2.2-4-0.9-0.8-2.3-1.2-4.2-1.2-1.8 0-3.3 0.7-4.7 2-1.3 1.3-2 3.1-2 5.2 0 2.1 0.6 3.7 1.9 4.9 1.3 1.3 2.8 1.9 4.6 1.9 1.8 0 3.2-0.5 4.3-1.3l-0.9-2.5c-0.9 0.9-2 1.4-3.3 1.4-1 0-1.9-0.4-2.7-1.2-0.7-0.9-1.1-1.9-1.1-3.2 0-1.7 0.4-2.9 1.2-3.7 0.8-0.7 1.8-1.1 2.8-1.1 1.1 0 1.9 0.3 2.4 0.9 0.5 0.6 1 1.5 1.4 2.8l0.9 2.8c1 3.4 3.6 5.1 7.6 5.1z' })
                )
            );
        }
    }]);

    return TiSocialLastFm;
}(React.Component);

exports.default = TiSocialLastFm;
module.exports = exports['default'];