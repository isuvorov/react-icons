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

var TiSocialFacebookCircular = function (_React$Component) {
    _inherits(TiSocialFacebookCircular, _React$Component);

    function TiSocialFacebookCircular() {
        _classCallCheck(this, TiSocialFacebookCircular);

        return _possibleConstructorReturn(this, (TiSocialFacebookCircular.__proto__ || Object.getPrototypeOf(TiSocialFacebookCircular)).apply(this, arguments));
    }

    _createClass(TiSocialFacebookCircular, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.6 9.4c-2.9-2.9-6.5-4.4-10.6-4.4-4.1 0-7.7 1.5-10.6 4.4-2.9 2.9-4.4 6.5-4.4 10.6 0 4.1 1.5 7.7 4.4 10.6 2.9 2.9 6.4 4.4 10.6 4.4 4.1 0 7.7-1.5 10.6-4.4 2.9-2.9 4.4-6.5 4.4-10.6 0-4.1-1.5-7.7-4.4-10.6z m-2.4 18.8c-1.9 1.9-4 3-6.5 3.3v-8.2h3.3v-3.3h-3.3v-2.3c0-0.6 0.4-1 1-1h2.3v-3.4h-2.3c-1.3 0-2.3 0.5-3.1 1.4-0.8 0.9-1.3 2-1.3 3.4v1.9h-3.3v3.3h3.3v8.3c-2.5-0.4-4.7-1.5-6.6-3.4-2.3-2.3-3.4-5-3.4-8.2 0-3.3 1.1-6 3.4-8.3 2.3-2.3 5-3.4 8.3-3.4 3.2 0 5.9 1.1 8.2 3.4 2.3 2.3 3.5 5 3.5 8.3 0 3.2-1.2 5.9-3.5 8.2z' })
                )
            );
        }
    }]);

    return TiSocialFacebookCircular;
}(React.Component);

exports.default = TiSocialFacebookCircular;
module.exports = exports['default'];