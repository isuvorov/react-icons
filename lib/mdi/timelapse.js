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

var MdiTimelapse = function (_React$Component) {
    _inherits(MdiTimelapse, _React$Component);

    function MdiTimelapse() {
        _classCallCheck(this, MdiTimelapse);

        return _possibleConstructorReturn(this, (MdiTimelapse.__proto__ || Object.getPrototypeOf(MdiTimelapse)).apply(this, arguments));
    }

    _createClass(MdiTimelapse, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,19.9981C 7.5804,19.9981 3.9994,16.4171 3.9994,11.9981C 3.9994,7.58007 7.5814,3.99807 11.9994,3.99807C 16.4174,3.99807 19.9994,7.57906 19.9994,11.9981C 19.9994,16.4161 16.4174,19.9981 11.9994,19.9981 Z M 11.9994,1.99807C 6.4764,1.99807 1.9994,6.47507 1.9994,11.9981C 1.9994,17.5211 6.4764,21.9981 11.9994,21.9981C 17.5224,21.9981 21.9994,17.5211 21.9994,11.9981C 21.9994,6.47507 17.5224,1.99807 11.9994,1.99807 Z M 16.2424,7.75507C 15.0704,6.58407 13.5346,5.99907 11.9994,5.99807L 11.9994,11.9981L 7.75624,16.2411C 10.1004,18.5841 13.8994,18.5831 16.2424,16.2411C 18.5854,13.8971 18.5854,10.0991 16.2424,7.75507 Z ' })
                )
            );
        }
    }]);

    return MdiTimelapse;
}(React.Component);

exports.default = MdiTimelapse;
module.exports = exports['default'];