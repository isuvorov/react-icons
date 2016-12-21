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

var TiSocialInstagramCircular = function (_React$Component) {
    _inherits(TiSocialInstagramCircular, _React$Component);

    function TiSocialInstagramCircular() {
        _classCallCheck(this, TiSocialInstagramCircular);

        return _possibleConstructorReturn(this, (TiSocialInstagramCircular.__proto__ || Object.getPrototypeOf(TiSocialInstagramCircular)).apply(this, arguments));
    }

    _createClass(TiSocialInstagramCircular, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 5c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z m0 11.7c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3-3.3-1.5-3.3-3.3 1.5-3.3 3.3-3.3z m4.7-3.4c0-1.1 1-2 2-2s2 1 2 2-0.9 2-2 2-2-0.8-2-2z m-4.7 18.4c-6.5 0-11.7-5.2-11.7-11.7h5c0 3.7 3 6.7 6.7 6.7s6.7-3 6.7-6.7h5c0 6.5-5.2 11.7-11.7 11.7z' })
                )
            );
        }
    }]);

    return TiSocialInstagramCircular;
}(React.Component);

exports.default = TiSocialInstagramCircular;
module.exports = exports['default'];