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

var TiSocialDribbbleCircular = function (_React$Component) {
    _inherits(TiSocialDribbbleCircular, _React$Component);

    function TiSocialDribbbleCircular() {
        _classCallCheck(this, TiSocialDribbbleCircular);

        return _possibleConstructorReturn(this, (TiSocialDribbbleCircular.__proto__ || Object.getPrototypeOf(TiSocialDribbbleCircular)).apply(this, arguments));
    }

    _createClass(TiSocialDribbbleCircular, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 35c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z m0-26.7c-6.4 0-11.7 5.3-11.7 11.7s5.3 11.7 11.7 11.7 11.7-5.3 11.7-11.7-5.3-11.7-11.7-11.7z m0 2.5c-5.1 0-9.2 4.1-9.2 9.2s4.1 9.2 9.2 9.2 9.2-4.1 9.2-9.2-4.1-9.2-9.2-9.2z m7.5 9c-1.8-0.3-3.5-0.3-5.2 0.1-0.2-0.5-0.4-1.1-0.7-1.6 1.5-0.9 2.8-2 3.8-3.5 1.3 1.4 2 3.1 2.1 5z m-3.4-6c-0.9 1.2-2 2.2-3.2 3-0.8-1.4-1.8-2.8-2.9-4 0.7-0.2 1.3-0.3 2-0.3 1.5 0 3 0.5 4.1 1.3z m-7.7-0.3c1.2 1.2 2.1 2.6 3 4.1-2.1 0.9-4.4 1.1-6.7 0.7 0.5-2.1 1.9-3.8 3.7-4.8z m-3.9 6.5c0.8 0.1 1.6 0.2 2.3 0.2 1.9 0 3.7-0.4 5.3-1.1 0.2 0.4 0.4 0.8 0.6 1.3-2.4 0.9-4.6 2.5-6.2 4.7-1.2-1.4-2-3.1-2-5.1z m3.2 6.2c1.4-2 3.4-3.5 5.6-4.2 0.5 1.6 0.8 3.4 1 5.1-0.8 0.2-1.5 0.4-2.3 0.4-1.6 0-3-0.5-4.3-1.3z m8.2 0.2c-0.2-1.7-0.5-3.3-1-4.9 1.4-0.3 2.9-0.3 4.4 0-0.4 2.1-1.7 3.8-3.4 4.9z' })
                )
            );
        }
    }]);

    return TiSocialDribbbleCircular;
}(React.Component);

exports.default = TiSocialDribbbleCircular;
module.exports = exports['default'];