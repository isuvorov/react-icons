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

var TiSocialFlickrCircular = function (_React$Component) {
    _inherits(TiSocialFlickrCircular, _React$Component);

    function TiSocialFlickrCircular() {
        _classCallCheck(this, TiSocialFlickrCircular);

        return _possibleConstructorReturn(this, (TiSocialFlickrCircular.__proto__ || Object.getPrototypeOf(TiSocialFlickrCircular)).apply(this, arguments));
    }

    _createClass(TiSocialFlickrCircular, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 35c-4.1 0-7.7-1.5-10.6-4.4-2.9-2.9-4.4-6.5-4.4-10.6 0-4.1 1.5-7.7 4.4-10.6 2.9-2.9 6.5-4.4 10.6-4.4 4.1 0 7.7 1.5 10.6 4.4 2.9 2.9 4.4 6.5 4.4 10.6 0 4.1-1.5 7.7-4.4 10.6-2.9 2.9-6.5 4.4-10.6 4.4z m0-26.7c-3.3 0-6 1.1-8.3 3.4-2.3 2.3-3.4 5-3.4 8.3 0 3.2 1.1 5.9 3.4 8.2 2.3 2.3 5 3.5 8.3 3.5 3.2 0 5.9-1.2 8.2-3.5 2.3-2.3 3.5-5 3.5-8.2 0-3.3-1.2-6-3.5-8.3-2.3-2.3-5-3.4-8.2-3.4z m-5 15.9c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z m0-6.7c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z m10 6.7c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z' })
                )
            );
        }
    }]);

    return TiSocialFlickrCircular;
}(React.Component);

exports.default = TiSocialFlickrCircular;
module.exports = exports['default'];